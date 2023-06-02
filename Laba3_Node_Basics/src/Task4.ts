import os from "os";
import si from "systeminformation";



const showParametrs = async() => {
      console.log(os.platform());
      console.log(os.arch());
      console.log(os.userInfo().username);  

      console.log(os.cpus().map(el => el.model ));  
      await si.cpuTemperature().then(temp => console.log(temp.cores))

      await si.graphics().then(info => console.log(info.controllers.map(el => el.vendor + " - " + el.model )))

      console.log( (Number(os.totalmem) / Math.pow(1024, 3)).toFixed(2));
      console.log( (Number(os.freemem) / Math.pow(1024, 3)).toFixed(2));

      await si.battery().then(info => console.log(`${info.isCharging} ${info.percent} ${info.timeRemaining}`));
}

setInterval(showParametrs, Number(process.argv.slice(2)[0]));
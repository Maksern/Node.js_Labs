import os from "os";
import si from "systeminformation";

type MemoryInfo = {
      totalmemInfo: string,
      usedmemInfo: string,
      freememInfo: string,
}

type BatteryInfo = {
      batteryPercent: number,
      batteryRemainingTime: number,
      isBatteryCharging: boolean,
}

type GpuControllerInfo = {
      vendor: string,
      model: string
}

type ComputerInfo = {
      platform: string,
      architecture: string,
      username: string,
      cpuCoresModels: os.CpuInfo[],
      cpuTemperature:  si.Systeminformation.CpuTemperatureData,
      gpuInfo: GpuControllerInfo[],
      memory: MemoryInfo,
      battery: BatteryInfo,
}


const memoryInfo = (): MemoryInfo => {
      const totalMemory: number = os.totalmem() / 10e8;
      const freeMemory: number = os.freemem() / 10e8;
      const usedMemory: number = totalMemory - freeMemory;
      const totalmemInfo: string = (totalMemory / Math.pow(1024, 3)).toFixed(2) + " GB";
      const usedmemInfo: string = (freeMemory / Math.pow(1024, 3)).toFixed(2) + " GB";
      const freememInfo: string = (usedMemory / Math.pow(1024, 3)).toFixed(2) + " GB";
      return {totalmemInfo, usedmemInfo, freememInfo};
};

const batteryInfo = async (): Promise<BatteryInfo> => {
      const battery = await si.battery();
      const batteryPercent = battery.percent;
      const batteryRemainingTime = battery.timeRemaining;
      const isBatteryCharging = battery.isCharging;
      return {batteryPercent, batteryRemainingTime, isBatteryCharging};
};

const gpuVemdorsandModelsInfo = async (): Promise<GpuControllerInfo[]> => {
      const {controllers} = await si.graphics();
      const res: GpuControllerInfo[] = [];
      for (const controller of controllers) {
          const gpuController: GpuControllerInfo = {
              vendor: controller.vendor,
              model: controller.model,
          };
          res.push(gpuController);
      }
      return res;
  };
  
  const computerInfo = async (): Promise<ComputerInfo> => {
      const platform: string = os.platform();
      const architecture: string = os.arch();
      const {username} = os.userInfo();
      const cpuCoresModels = os.cpus();
      const memory: MemoryInfo = memoryInfo();
      const gpuInfo: GpuControllerInfo[] = await gpuVemdorsandModelsInfo();
  
      const cpuTemperature = await si.cpuTemperature();
      const battery: BatteryInfo = await batteryInfo();
  
      return {
            platform,
            architecture,
            username,
            cpuCoresModels,
            cpuTemperature,
            gpuInfo,
            memory,
            battery,
      };
  };
  

setInterval(computerInfo, Number(process.argv.slice(2)[0]));
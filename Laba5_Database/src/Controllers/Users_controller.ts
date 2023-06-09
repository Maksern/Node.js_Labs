import { Request, Response } from "express";
import database from "../database"


const getAllUsers = async(req: Request, res: Response) => {
      const users = await database.query(`
      select name, avatar_url, photo_url, description, created_at
      from users
          inner join channels c on users.id = c.user_id
      order by created_at desc;`);
      res.send(users.rows);
}

const get5PositiveLikestVideos = async(req: Request, res: Response) => {
      const videos = await database.query(`
      select channel_id, title, description, preview_url, file_url, duration, published_at, likes_number
      from videos
            join (select video_id, count(*) as likes_number from likes where positive = true group by video_id) l
                  on videos.id = l.video_id order by l.likes_number desc limit 5;`);
      res.send(videos.rows);
}

const getVideosOfUsersSubscriptions = async(req: Request, res: Response) => {
      const videos = await database.query(`
      select title, preview_url, duration, published_at
            from videos where channel_id in
                  (select channel_id from subscriptions where user_id = (select id from users where name = $1))
                        order by published_at;`, [req.params.name]);
      res.send(videos.rows);
}

const getChannelById = async(req: Request, res: Response) => {
      const channel = await database.query(`
      select description, photo_url, created_at, subcriptions_number
            from channels
                  join (select channel_id, count(*) as subcriptions_number from subscriptions group by channel_id) s on channels.id = s.channel_id
                         where id = $1`, [req.params.id]);
      res.send(channel.rows);
}

const get10LikestVideos = async(req: Request, res: Response) => {
      const videos = await database.query(`
      select title, description, duration, likes_number
      from videos
      join (select video_id, count(*) as likes_number from likes where created_at > '2021-09-01' group by video_id) l
            on videos.id = l.video_id where id in
            (select id from videos join (
                  select video_id, count(*) as positivelikes_number from likes where created_at > '2021-09-01'and positive = true
                  group by video_id order by positivelikes_number
                  ) pl on id = pl.video_id  where positivelikes_number >= 4)
                  order by likes_number desc;`);
      res.send(videos.rows);
}


const getDataOfSubscriptions = async(req: Request, res: Response) => {
      const data = await database.query(`
      select users.id, name, avatar_url, photo_url, description, level, subscribed_at from users
      inner join channels c on users.id = c.user_id
      inner join subscriptions s on c.id = s.channel_id
          where s.user_id = (select id from users where name = $1)
      order by case
           WHEN level = 'vip' then 1
           WHEN level = 'follower' then 2
           WHEN level = 'fan' then 3
           WHEN level = 'standard' then 4
      end, subscribed_at desc;`, [req.params.name]);
      res.send(data.rows);
}

export const controller = {getAllUsers, get5PositiveLikestVideos, getVideosOfUsersSubscriptions, getChannelById, get10LikestVideos,  getDataOfSubscriptions}
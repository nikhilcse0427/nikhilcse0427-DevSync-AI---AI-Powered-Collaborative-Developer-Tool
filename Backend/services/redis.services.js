import Redis from 'ioredis'

const RedisClient = new Redis({
  host:process.env.REDIS_HOST,
  port:process.env.REDIS_PORT,
  password:process.env.REDIS_PASSWORD
})

RedisClient.on('connect',()=>{
  console.log("REDIS CONNECTED SUCCESSFULLY !!")
})

export default RedisClient
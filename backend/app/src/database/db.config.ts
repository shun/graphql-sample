import {ConnectionOptions} from "typeorm";

export const DBConfig: ConnectionOptions = {
  type: "mysql",
  host: "db",
  port: 3306,
  username: "booking",
  password: "booking",
  database: "booking_prod",
  entities: ["src/entity/**/*.ts"]
};

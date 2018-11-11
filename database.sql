CREATE TABLE livelist (
  id serial primary key,
  content varchar(4096)
);

CREATE TABLE sfg (
  id serial primary key,
  content varchar(4096)
);

CREATE TABLE devicex (
  id serial primary key,
  device_x_id integer,
  content varchar(4096)
);

CREATE TABLE devicexy (
  id serial primary key,
  device_x_id integer,
  device_y_id integer,
  content varchar(4096)
);

CREATE TABLE devicexyz (
  id serial primary key,
  device_x_id integer,
  device_y_id integer,
  device_z_id integer,
  content varchar(4096)
);

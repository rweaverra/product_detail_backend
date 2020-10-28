
CREATE TABLE product
(
    id int NOT NULL PRIMARY KEY,
    name text COLLATE pg_catalog."default" NOT NULL,
    slogan text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    category text COLLATE pg_catalog."default" NOT NULL,
    default_price text COLLATE pg_catalog."default" NOT NULL

);

CREATE TABLE styles
(
     stylesId int NOT NULL PRIMARY KEY,
    product_id integer,
    name text COLLATE pg_catalog."default" NOT NULL,
    sale_price text COLLATE pg_catalog."default",
    original_price text COLLATE pg_catalog."default" NOT NULL,
    default_style integer NOT NULL,
    CONSTRAINT product_id FOREIGN KEY (product_id)
        REFERENCES product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
);


CREATE TABLE features
(
    featuresId int NOT NULL PRIMARY KEY,
    product_id integer,
    feature character varying(200) COLLATE pg_catalog."default",
    value character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT product_id FOREIGN KEY (product_id)
        REFERENCES product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
);

CREATE TABLE photos
(
     photosId int NOT NULL PRIMARY KEY,
    styles_id integer,
    url text COLLATE pg_catalog."default" NOT NULL,
    thumbnail_url text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT styles_id FOREIGN KEY (styles_id)
        REFERENCES styles (stylesId) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);



CREATE TABLE skus
(
    skusId int NOT NULL PRIMARY KEY,
    styles_id integer,
    size character varying(5) COLLATE pg_catalog."default",
    quantity integer,
    CONSTRAINT styles_id FOREIGN KEY (styles_id)
        REFERENCES styles (stylesId) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
);

\COPY product FROM '/home/ec2-user/product_detail_RW/database/product.csv' DELIMITER ',' CSV HEADER;

\COPY features FROM '/home/ec2-user/product_detail_RW/database/features.csv' DELIMITER ',' CSV HEADER;


\COPY styles FROM '/home/ec2-user/product_detail_RW/database/styles.csv' DELIMITER ',' CSV HEADER;

\COPY skus FROM '/home/ec2-user/product_detail_RW/database/skus.csv'
DELIMITER ','
CSV HEADER;

\COPY photos FROM '/home/ec2-user/product_detail_RW/database/photos.csv'
DELIMITER ','
CSV HEADER;



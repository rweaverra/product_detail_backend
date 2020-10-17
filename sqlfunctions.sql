
CREATE TABLE product
(
    id integer NOT NULL,
    name character varying(200) COLLATE pg_catalog."default" NOT NULL,
    slogan character varying(255) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    category character varying(200) COLLATE pg_catalog."default",
    default_price integer,
    CONSTRAINT product_pkey PRIMARY KEY (id)
)



INSERT INTO product(
id, name, slogan, description, category, default_price)
VALUES (1, 'Camo Onesie', 'Blend in to your crowd', 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.', 'Jackets', 140);


CREATE TABLE styles
(
    id integer NOT NULL,
    product_id integer NOT NULL,
    name character varying(200) COLLATE pg_catalog."default",
    sale_price integer,
    original_price integer,
    default_style integer,
    CONSTRAINT styles_pkey PRIMARY KEY (id),
    CONSTRAINT product_id FOREIGN KEY (product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

INSERT INTO styles(
	id, product_id, name, sale_price, original_price, default_style)
	VALUES (1, 1, 'Forest Green & Black', null, 140, 1);

  CREATE TABLE features
(
    id integer NOT NULL,
    product_id integer NOT NULL,
    feature character varying(200) COLLATE pg_catalog."default",
    value character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT features_pkey PRIMARY KEY (id),
    CONSTRAINT product_id FOREIGN KEY (product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

INSERT INTO features(
	id, product_id, feature, value)
	VALUES (1, 1, 'Fabric', 'Canvas');

INSERT INTO features(
	id, product_id, feature, value)
	VALUES (2, 1, 'Buttons', 'Brass');
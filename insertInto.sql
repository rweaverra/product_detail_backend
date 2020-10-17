



INSERT INTO product(
id, name, slogan, description, category, default_price)
VALUES (1, 'Camo Onesie', 'Blend in to your crowd', 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.', 'Jackets', 140);


INSERT INTO styles(
	id, product_id, name, sale_price, original_price, default_style)
	VALUES (1, 1, 'Forest Green & Black', null, 140, 1);

    INSERT INTO styles(
	product_id, name, sale_price, original_price, default_style)
	VALUES (1, 'Forest Green & Black', null, '140', 1);


INSERT INTO features(
	id, product_id, feature, value)
	VALUES (1, 1, 'Fabric', 'Canvas');

INSERT INTO features(
	id, product_id, feature, value)
	VALUES (2, 1, 'Buttons', 'Brass');

INSERT INTO skus (
  styles_id, size, quantity)
  VALUES (1, 'XS', 8);

DROP TABLE IF EXISTS posts;
CREATE TABLE IF NOT EXISTS posts (
  post_number SERIAL PRIMARY KEY,
  title VARCHAR(140) UNIQUE NOT NULL,
  url_path VARCHAR(140) NOT NULL,
  body TEXT NOT NULL,
  tags VARCHAR(30)[],
  written VARCHAR(29) DEFAULT CURRENT_TIMESTAMP,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  edited TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE OR REPLACE FUNCTION set_posts_edited()
  RETURNS TRIGGER
  LANGUAGE plpgsql
AS $$
BEGIN
  NEW.edited := now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS posts_update ON posts;
CREATE TRIGGER posts_update
  BEFORE UPDATE ON posts
  FOR EACH ROW EXECUTE PROCEDURE set_posts_edited();


CREATE OR REPLACE FUNCTION set_posts_url()
  RETURNS TRIGGER
  LANGUAGE plpgsql
AS $$
BEGIN
  NEW.url_path := array_to_string((string_to_array(lower(NEW.title), ' ')), '-');
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS posts_insert ON posts;
CREATE TRIGGER posts_insert
  BEFORE INSERT ON posts
  FOR EACH ROW EXECUTE PROCEDURE set_posts_url();

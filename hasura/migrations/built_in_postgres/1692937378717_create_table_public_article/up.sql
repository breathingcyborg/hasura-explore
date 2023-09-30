CREATE TABLE "public"."article" ("id" serial NOT NULL, "slug" text NOT NULL, "title" text NOT NULL, "status" Text NOT NULL, "author_id" integer NOT NULL, "content" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "published_at" timestamptz DEFAULT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("status") REFERENCES "public"."article_status"("value") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("slug"), CONSTRAINT "slug_pattern" CHECK (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_article_updated_at"
BEFORE UPDATE ON "public"."article"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_article_updated_at" ON "public"."article"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

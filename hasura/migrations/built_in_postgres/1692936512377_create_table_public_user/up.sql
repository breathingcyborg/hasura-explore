CREATE TABLE "public"."user" ("id" serial NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "role" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("role") REFERENCES "public"."user_role"("value") ON UPDATE cascade ON DELETE cascade, UNIQUE ("email"));
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
CREATE TRIGGER "set_public_user_updated_at"
BEFORE UPDATE ON "public"."user"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_user_updated_at" ON "public"."user"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

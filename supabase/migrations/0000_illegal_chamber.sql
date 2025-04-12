CREATE TABLE "rider_table" (
	"id" uuid PRIMARY KEY NOT NULL,
	"address_line_1" text NOT NULL,
	"born_at" date NOT NULL,
	"city" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"postal_code" text NOT NULL,
	"weight_in_kg" integer NOT NULL
);

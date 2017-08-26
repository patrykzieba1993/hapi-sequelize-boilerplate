CREATE DATABASE boilerplate;
CREATE DATABASE boilerplate_test;

CREATE USER dev WITH ENCRYPTED PASSWORD 'dev' SUPERUSER;

GRANT ALL ON DATABASE boilerplate TO dev;
GRANT ALL ON DATABASE boilerplate_test TO dev;

\CONNECT boilerplate;

CREATE SCHEMA boilerplate;
GRANT ALL ON SCHEMA boilerplate TO dev;

\CONNECT boilerplate_test;

CREATE SCHEMA boilerplate_test;
GRANT ALL ON SCHEMA boilerplate_test TO dev;
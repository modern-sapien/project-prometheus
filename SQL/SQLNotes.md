# MySQL Notes

EXAMPLE STATEMENTS & EXPLANATIONS

## Basic Functionality

---

### SQL Statement CREATE TABLE

    CREATE TABLE table_name (
    column_1 data_type,
    column_2 data_type,
    column_3 data_type
    );

1. CREATE TABLE is a clause or command
2. table_name refers to the name of the table that the command is applied to
3. (column_1 data_type, column_2 data_type) are parameters

---

### SQL Statement INSERT INTO

    INSERT INTO celebs (id, name, age)
    VALUES (1, 'Justin Bieber', 22);

1. INSERT INTO is a clause that adds specified row or rows
2. celebs is the table the row is added to
3. (id, name, age) is the parameter the columns the data will be insert into

---

### SQL Statement ALTER TABLE

    ALTER TABLE celebs
    ADD COLUMN twitter_handle TEXT;

1. ALTER TABLE clause that lets you make specific changes
2. celebs is the name of table being changed
3. ADD COLUMN clause that adds a new column to the table
   - twitter_handle is the name of the new column being added
   - TEXT is the data type for the new column

---

### SQL Statement UPDATE

    UPDATE celebs
    SET twitter_handle = '@taylorswift13'
    WHERE id = 4;

1. UPDATE is a cluase that edits rows in the table
2. celebs is the name of the table
3. SET is a clause that indicates the column to edit
4. WHERE is a cluase that indicates which row(s) to update with the new column value. Here the row with a 4 in the id column is the row that will have the twitter_handle updated to @taylorswift13

---

### SQL Statement UPDATE

    DELETE FROM celebs
    WHERE twitter_handle IS NULL;

1. DELETE FROM is a cluase that lets you delete rows from a table.
2. celebs is the name of the table we want to delete rows from
3. WHERE is a clause that lets you select which rows you want to delete.
4. IS NULL is a condition in SQL that returns true when the value is NULL and false otherwise.

---

### SQL Example Constraints

    CREATE TABLE celebs (
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE,
    date_of_birth TEXT NOT NULL,
    date_of_death TEXT DEFAULT 'Not Applicable'

);

1. PRIMARY KEY columns can be used to uniquely identify the row. Attempts to insert a row with an identical value to a row already in the table will result in a constraint violation.
2. UNIQUE columns havea different value for every row. This is similar to PRIMARY KEY, except tables can have amny different unique columns.
3. NOT NULL columns must have a value. Attempts to insert a row without a value for a NOT NULL column will results in a constraint violation and the new row will not be inserted.
4. DEFAULT columns take an additional argument that wil be the assumed value for an inserted row if the new row does not specify a value for that column.

---

---

---

## QUERIES

### SELECT

    SELECT column1, column2
    FROM table_name;

1. SELECT let's us specify what we're interested in returning
2. FROM gives us the ability to choose the table

---

### AS

    SELECT name AS 'Titles'
    FROM movies;

AS allows us to rename a column or table using an alias. The new name can be anything as long as it is within single quotes.

Columns are not being renamed the alias only appear in the result.

---

### DISTINCT

The query below will return all tools.

    SELECT tools
    FROM inventory;

The query using DISTINCT will return only unique tools.

    SELECT DISTINCT tools
    FROM inventory;

---

### WHERE & it's OPERATORS

WHERE allows us to add specificity to our queries as in the query below will only return results WHERE that criteria is true.

    SELECT *
    FROM movies
    WHERE imdb_rating > 8;

RELEVANT OPERATORS for WHERE

    = equal to
    != not equal to
    > greater than
    < less than
    >= greater than or equal to
    <= less than or equal to

---

### LIKE

LIKE is a useful operator when you want to compare similar values

    SELECT *
    FROM movies
    WHERE name LIKE 'Se_en';

### in conjunction with \_

1. LIKE is a special operator used with the WHERE clause to search for a specific pattern in a column.
2. name LIKE 'Se_en' is a condition evaluating the name column for a specific pattern.
3. Se_en represents a pattern with a wildcard character.

### in conjunction with %

% is a wildcard character that matches zero or more missing letters in the pattern. For example:

- A% matches all movies with names that begin with letter ‘A’
- %a matches all movies that end with ‘a’

The query below will filter results set to only include movies with names that begin with the letter A.

    SELECT *
    FROM movies
    WHERE name LIKE 'A%';

---

### IS NULL / IS NOT NULL

It is not possible to test for NULL values with comparison operators; so you must use;

- IS NULL
- IS NOT NULL

example

    SELECT name
    FROM movies
    WHERE imdb_rating IS NOT NULL;

---

### BETWEEN

BETWEEN operator is used in a WHERE clause to filter results set within a certain range. It accepts two values that are either numers, text or dates.

    SELECT *
    FROM movies
    WHERE year BETWEEN 1990 AND 1999;

up to and including 1999

    SELECT *
    FROM movies
    WHERE name BETWEEN 'A' AND 'J';

up to and not including "J" and not subsequent letters in a word.

---

### AND

AND is used for combining multiple conditions to make the result set more specific and useful.

    SELECT *
    FROM movies
    WHERE year BETWEEN 1990 AND 1999
    AND genre = 'romance';

Returns rows if all conditions are true

---

### OR

OR operator can also be used to combine multiple conditions in WHERE, but there the differences are;

- AND operator a row if _all_ conditions are true
- OR operator displays a row if _any_ condition is true

  SELECT \*
  FROM movies
  WHERE year > 2014
  OR genre = 'action';

---

---

### ORDER BY

Sort results using ORDER BY either alpahbetically or numerically.

    SELECT *
    FROM movies
    ORDER BY name;

1. ORDER BY inidcates we want to sort the result by a particular column
2. name is the specified column

Use ASC or DESC after the column name to specify what order you want to receive in the query result.

    SELECT *
    FROM movies
    WHERE imdb_rating > 8
    ORDER BY year DESC;

ORDER BY always comes after WHERE if WHERE is present

---

### LIMIT

Lets you specify the maximum number of rows the result set will have.

This clause is not supported in all SQL databases.

SELECT \*
FROM movies
ORDER BY imdb_rating DESC
LIMIT 3;

---

### CASE

A CASE statement allows us to create different outputs usually in a SELECT statement. It is SQL's way of handling if-then logic.

    SELECT name,
    CASE
    WHEN genre IS 'romance' THEN 'Chill'
    WHEN genre IS 'comedy' THEN 'Chill'
    ELSE 'Intense'
    END AS 'Mood'
    FROM movies;

---

## AGGREGATE FUNCTIONS

### COUNT(): count the number of rows

        SELECT COUNT(*)
        FROM fake_apps
        WHERE price = 0;

### SUM(): the sum of the values in a column

    SELECT SUM(downloads)
    FROM fake_apps;

---

### MAX()/MIN(): the largest/smallest value in a column

    SELECT MAX(downloads)
    FROM fake_apps;

    SELECT MIN(downloads)
    FROM fake_apps;

---

### AVG(): the average of the values in a column

    SELECT AVG(downloads)
    FROM fake_apps;

---

### ROUND(): round the values in the column

the function takes two arguments
_ a column name
_ an integer (the integer is the amount of decimals to round by) \* example below

    SELECT name, ROUND(price, 2)
    FROM fake_apps;

---

### GROUP BY

Instead of having to calculate similar queries repeatedly & separately - GROUP BY helps us accomplish this in a single query

- GROUP BY is used with aggregate functions
- It is used in conjunction with SELECT statements to arrange identical data into groups
- GROUP BY comes **after** any WHERE statements, but **before** ORDER BY or LIMIT
- examples below

  SELECT price, COUNT(\*)
  FROM fake_apps
  WHERE downloads > 20000
  GROUP BY price;

  SELECT category, SUM(downloads)
  FROM fake_apps
  GROUP BY category;

// Tables for 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10
const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tables.forEach(table => {
    console.log(`Multiplication Table for ${table}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${table} x ${i} = ${table * i}`);
    }
    console.log("\n");
});
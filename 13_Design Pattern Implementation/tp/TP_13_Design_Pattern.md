# TP 13 – Design Pattern Implementation

## Design Pattern yang Ditemukan: **Singleton**

Di dalam repositori tugas besar (sistem perpustakaan), saya menemukan penggunaan **Singleton pattern** pada file `src/config/database.ts`. Pattern ini diterapkan untuk mengelola koneksi database agar hanya ada satu *pool* koneksi yang hidup selama aplikasi berjalan.

---

## Kodenya

```typescript
// src/config/database.ts
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  host:     process.env.DB_HOST     || "localhost",
  port:     Number(process.env.DB_PORT) || 3306,
  user:     process.env.DB_USER     || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME     || "perpustakaan_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool = mysql.createPool(dbConfig);

export const testConnection = async (): Promise<void> => {
  const conn = await pool.getConnection();
  console.log(`✅ Database terhubung: ${dbConfig.database}@${dbConfig.host}:${dbConfig.port}`);
  conn.release();
};

export default pool;
```

Kemudian `pool` ini dipakai di seluruh aplikasi melalui `DatabaseHelper`:

```typescript
// src/config/databaseHelper.ts
import pool from "./database";

export class DatabaseHelper {
  static async eksekusiQuery<T>(sql: string, params: any[] = []): Promise<T[]> {
    const [rows] = await pool.query(sql, params);
    return rows as T[];
  }
  // ...
}
```

---

## Penjelasan Desainnya

**Singleton** adalah design pattern yang memastikan sebuah objek hanya dibuat **satu kali** dan digunakan bersama di mana pun ia dibutuhkan.

Dalam kode ini, `pool` dibuat sekali saat modul `database.ts` pertama kali di-*import*. JavaScript/Node.js secara otomatis meng-*cache* modul yang sudah di-*import* — artinya, tidak peduli berapa banyak file yang menulis `import pool from "./database"`, mereka semua mendapatkan **objek `pool` yang sama persis**, bukan salinan baru.

Ini adalah Singleton "gaya JavaScript modern" yang memanfaatkan mekanisme *module caching* dari Node.js, dibanding Singleton berbasis kelas yang perlu menjaga properti `static instance` secara manual (seperti contoh di modul kuliah).

**Kenapa Singleton cocok di sini?**

Membuat koneksi database itu mahal (butuh waktu dan resource). Kalau setiap service atau controller membuat koneksinya sendiri, aplikasi bisa kehabisan koneksi dan melambat. Dengan Singleton, satu `pool` dibagi pakai oleh semua bagian aplikasi — `anggotaService`, `bukuService`, `peminjamanService`, dst. — sehingga penggunaan resource jauh lebih efisien.

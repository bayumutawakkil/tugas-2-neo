# Todo List dengan Local Storage
**Tugas Bootcamp FE Minggu Kedua**

Aplikasi Todo List yang fully interactive dengan fitur penyimpanan data menggunakan localStorage.

## Fitur Utama ✨

### 1. **Tambah Todo** ✅
- Pengguna dapat mengetikkan tugas baru di input field
- Klik tombol "Tambah" atau tekan Enter untuk menambahkan
- Validasi input: tidak boleh kosong
- Setiap todo mendapat ID unik dan timestamp

### 2. **Toggle Selesai** ✅
- Centang checkbox untuk menandai tugas sebagai selesai
- Teks akan dicoret (strikethrough) ketika selesai
- Status berubah secara real-time

### 3. **Hapus Todo** ✅
- Tombol "Hapus" di setiap item untuk menghapus tugas
- Konfirmasi sebelum menghapus
- Update otomatis pada statistik

### 4. **Data Persistence** ✅
- Semua data disimpan di localStorage browser
- Data tidak akan hilang saat halaman di-refresh
- Otomatis load data saat aplikasi dibuka

## Fitur Tambahan 🚀

- 📊 **Statistik Real-time**: Menampilkan jumlah total, aktif, dan selesai
- 🎨 **UI Modern**: Gradient background, animasi smooth
- 📱 **Responsive Design**: Bekerja baik di desktop dan mobile
- ⌨️ **Keyboard Support**: Tekan Enter untuk submit
- 🔔 **Konfirmasi**: Tanyakan sebelum menghapus
- ✨ **Animasi**: Fade-in effect untuk item baru

## Teknologi yang Digunakan 🛠️

- **React 18** - Library JavaScript untuk UI
- **Babel** - Transpiler untuk JSX
- **CSS3** - Styling modern dengan gradient dan animasi
- **LocalStorage API** - Untuk penyimpanan data

## Cara Menggunakan 🎯

1. Buka file `index.html` di browser
2. Ketikkan tugas baru di input field
3. Klik "Tambah" atau tekan Enter
4. Centang checkbox untuk menandai selesai
5. Klik "Hapus" untuk menghapus tugas
6. Data akan otomatis tersimpan di localStorage

## Struktur Data 📁

Setiap todo object memiliki struktur:
```javascript
{
    id: 1234567890,              // Unique identifier
    text: "Tugas saya",           // Deskripsi tugas
    completed: false,             // Status selesai
    createdAt: "12/06/2026, ..."  // Waktu pembuatan
}
```

## Implementasi useState & useEffect 🔧

### useState
```javascript
const [todos, setTodos] = useState([]);        // State untuk array todos
const [inputValue, setInputValue] = useState(''); // State untuk input
```

### useEffect
```javascript
// Membaca dari localStorage saat component mount
useEffect(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
    }
}, []);

// Menulis ke localStorage setiap kali todos berubah
useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}, [todos]);
```

## Tips Penggunaan 💡

- Untuk menandai selesai, centang checkbox (tidak perlu klik teks)
- Untuk menghapus, klik tombol "Hapus" (akan ada konfirmasi)
- Data disimpan otomatis, jadi Anda bisa menutup tab dan membukanya lagi
- Statistik di bawah akan update otomatis saat ada perubahan

## Browser Support 🌐

Bekerja di semua browser modern yang support:
- ES6 JavaScript
- localStorage API
- React 18

---
**Dibuat sebagai tugas bootcamp Frontend minggu kedua** 📚

# **Saucedemo QA Testing**

### **Manual & Automation (Cypress) Project**

by Astri Yuliana Siahaan

---

## 📌 **Overview**

Project ini berisi proses **Manual Testing** dan **Automation Testing menggunakan Cypress** pada website:
🔗 [https://www.saucedemo.com](https://www.saucedemo.com)

Pengujian mencakup fitur utama seperti login, add to cart, remove, cart display, checkout flow, sorting, dan pengujian untuk berbagai tipe user.

---

# **📂 Project Structure**

```
Saucedemo-QA-Automation-Manual/
│
├── automation-testing/
│   ├── cypress/
│   ├── cypress.config.js
│   ├── package.json
│
├── manual-testing/
│   ├── Test Plan.pdf
│   ├── Test Case.pdf
│   ├── Bug Report.pdf
│
├── demo-test/
│   ├── video-demo.webm
│
├── Test Report/
│   ├── Report Automation Test - Cypress.pdf
│
└── README.md
```

---

# 📝 **1. Manual Testing Deliverables**

## ✅ **Test Plan**

Dokumen yang berisi tujuan pengujian, ruang lingkup, strategi testing, jenis testing, jadwal, risiko & dependencies.
📄 **Link Test Plan (PDF):**
➡️ [Test Plan](./Manual%20Testing/Test%20Plan.pdf)

---

## ✅ **Test Case**

Dokumentasi test case mencakup:
✔ Login
✔ Add to Cart
✔ Remove Item
✔ View Cart
✔ Checkout Flow (Your Info → Overview → Complete)
✔ Sorting (A-Z, Z-A, Price Low/High)
✔ Pengujian berdasarkan tipe user

📑 **Link Test Case (PDF):**
➡️ [Test Case](./Manual%20Testing/Test%20Case.pdf)

---

## ✅ **Bug Report**

Berisi temuan bug dari user: `problem_user`, `error_user`, `visual_user`, dll.
Bug meliputi UI layout, tombol tidak berfungsi, gambar salah, error checkout, dan sorting yang tidak bekerja.

📑 **Link Bug Report (PDF):**
➡️ [Bug Report](./Manual%20Testing/Bug%20Report.pdf)

---

# 🤖 **2. Automation Testing – Cypress**

Automation dilakukan menggunakan Cypress v13 dengan skenario:

### 🔹 **Test List**

* Login test
* Add to cart
* Remove item
* View cart
* Checkout (Your Info → Overview → Complete)
* Sorting tests:

  * A → Z
  * Z → A
  * Price low → high
  * Price high → low
* Loop testing untuk semua user:

```
standard_user
problem_user
performance_glitch_user
error_user
visual_user
```

---

## ⚙️ **Cara Menjalankan Automation**

### 📌 Install Dependencies

```
npm install
```

### 📌 Membuka Cypress GUI

```
npx cypress open
```

### 📌 Menjalankan test

Pilih browser → pilih spec file → klik *Run*.

---

## 📄 **3. Automation Test Report**

Report hasil automation test Cypress bisa dilihat disini:
➡️ [Lihat Report PDF](./Test%20Report/Report%20Automation%20Test%20-%20Cypress.pdf)

Folder `automation-testing/cypress/reports` berisi hasil log & report tambahan dari Cypress. Dapat diakses disini:
➡️ [Cypress Reports Folder](./Automation%20Testing/cypress/reports)

---

# 🎥 **4. Demo Video**

Video demo menjalankan Cypress Automation.
🎬 **Link Video:**
➡️ [Video Demo](./demo-test/video-demo.webm)

---

# 🧰 **5. Tools Used**

| Category        | Tools                  |
| --------------- | ---------------------- |
| Manual Testing  | Google Sheet / Excel   |
| Automation      | Cypress                |
| Version Control | Git, GitHub            |
| Recording       | Screen Recorder / WebM |
| OS              | Windows                |

---

# 🌸👩🏻‍💻 **Author**

**Astri Yuliana Siahaan**
Quality Assurance — Manual & Automation

✨ *Project pribadi ini masih dalam tahap pengembangan. Mohon dimaklumi jika ada kekurangan, dan saya sangat terbuka untuk masukan, saran, maupun kolaborasi.*

---




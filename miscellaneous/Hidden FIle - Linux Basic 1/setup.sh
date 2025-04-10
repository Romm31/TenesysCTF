#!/bin/bash

# Membuat direktori challenge
mkdir -p ctf_challenge
cd ctf_challenge

# Membuat file tersembunyi dengan flag bertema easy dalam bahasa Inggris
echo "tenesys{T0o_Ea5Y123}" > .flag.txt

# Menampilkan petunjuk
cat <<EOF > README.txt
Welcome to this CTF challenge!

I have hidden something in the system. Can you find it?

Hint:
- Basic Linux commands might help you.
- Try using "ls -la".
EOF

# Mengatur izin agar tidak ada yang mengedit flag
chmod 444 .flag.txt

# Kembali ke direktori sebelumnya
cd ..

# Membuat file ZIP berisi tantangan CTF
zip -r chall.zip ctf_challenge

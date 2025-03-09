# データベースを待機
until nc -z db 3306; do
    echo 'Waiting for database...'
    sleep 2
done

npx prisma migrate dev
npm run seed
npm run dev
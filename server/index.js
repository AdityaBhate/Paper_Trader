import express from "express"

const app = express()

app.use(express.json())

app.listen(PORT || 3002, () => {
    console.log(`Listening on Port ${PORT}`)
})
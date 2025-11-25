app.post("ongsCreate", async (res,req) => {})



app.get("/likes", async (res, req) => {
    try {
        const [results] = await pool.query ('SELECT * FROM curtida')
        res.send(results)
    } catch (error) {
        console.log(error)
    }
})
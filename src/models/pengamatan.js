const dbPool = require('../config/database.js');

const getAllpengamatan = async () => {
    const SQLQuery =  `
            SELECT *
            FROM pengamatan
            WHERE id IN (
                SELECT MAX(id)
                FROM pengamatan
                WHERE ketinggian_air != 0
                GROUP BY DATE_FORMAT(jam, '%Y-%m-%d %H:%i')
);

        `;

    return dbPool.execute(SQLQuery);
}

const createNewPengamatan = (body) => {
    const SQLQuery = `INSERT INTO pengamatan (tanggal, jam, ketinggian_air, papan_elevasi, status_ketinggian) 
                      VALUES ('${body.tanggal}', '${body.jam}', ${body.ketinggian_air}, ${body.papan_elevasi}, '${body.status_ketinggian}')`;
    
    return dbPool.execute(SQLQuery);
}


module.exports = {
    getAllpengamatan,
    createNewPengamatan,
}

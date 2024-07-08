const PengamatanModel = require('../models/pengamatan');

const getAllpengamatan = async (req, res) => {
    // Call the getAllpengamatan function from the PengamatanModel module
    try{
        const [data] = await PengamatanModel.getAllpengamatan();
    // Send a JSON response with the fetched data
        res.json({
            message: 'GET all pengamatan sukses',
            data: data
        })

    }   
    
    catch (error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })

    }
 
}

// const getAllpengamatan = async (req, res) => {
//     try {
//         // SQL query to fetch the last data entry for every minute
//         const query = `
//             SELECT *
//             FROM pengamatan
//             WHERE id IN (
//                 SELECT MAX(id)
//                 FROM pengamatan
//                 GROUP BY DATE_FORMAT(jam, '%Y-%m-%d %H:%i')
//             )
//         `;

//         // Execute the query
//         const [filteredData] = await PengamatanModel.query(query);

//         // Send a JSON response with the fetched data
//         res.json({
//             message: 'GET all pengamatan sukses',
//             data: filteredData
//         });
//         console.log(res.json)
//     } catch (error) {
//         res.status(500).json({
//             message: 'Server Error',
//             serverMessage: error.message // Include the error message for debugging
//         });
//     }
// };




const createNewPengamatan = async (req, res) => {
    const { body } = req;
    try {
        await PengamatanModel.createNewPengamatan(body);
        res.json({
            message: 'CREATE new pengamtan success',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};


// Export the getAllpengamatan function so that it can be used in other parts of your application
module.exports = {
    getAllpengamatan,
    createNewPengamatan,
}

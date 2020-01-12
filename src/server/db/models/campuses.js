import { define } from '../database';
import { STRING, TEXT } from 'sequelize';

const Campus = define('campus', {
    name: {
        type:STRING,
        allowNull:false,
        validate : {
            len: 1
        }
    },
    imageUrl: {
        defaultValue:'https://map.hood.edu/maps/UMAP_2014031260093_4_3_2.jpg'
    },
    address: {
        type:STRING,
        allowNull:false,
        validate: {
            len:1
        }
    },
    description : {
        type:TEXT
    }

})

export default Campus
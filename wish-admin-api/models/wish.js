const Sqeuelize=require('sequelize');
const db=require('../db');
const Wish=db.define('Wishe', {
    id: { type: Sqeuelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: Sqeuelize.STRING, allowNull:false},
    content: {type: Sqeuelize.STRING, allowNull: false}
},{
    underscored: true,
    tableName: 'wish'
});

module.exports=Wish;

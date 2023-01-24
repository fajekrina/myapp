module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define('Chat', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        to_user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedMe: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deletedAll: {
            type: DataTypes.DATE,
            allowNull: true
        } 
    }, {
        tableName: 'chat' 
    });

    return Chat;
}
module.exports = (sequelize, DataTypes) => {
    const UserGroup = sequelize.define('UserGroup', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'user_group' 
    });

    return UserGroup;
}
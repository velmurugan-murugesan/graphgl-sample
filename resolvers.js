const db = require('./db')

const Query = {
    test: () => 'Test Success, GraphQL server is up & running !!',

    getAllStudents: () => db.students.list()
 }

 const Mutation = {
    createStudent:(root,args,context,info) => {
        return db.students.create({collegeId:args.collegeId,
        firstName:args.firstName,
        lastName:args.lastName})
     }
 }

 module.exports = {Query, Mutation}
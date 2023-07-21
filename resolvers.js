const db = require('./db')

const Query = {
    test: () => 'Test Success, GraphQL server is up & running !!',

    getAllStudents: () => db.students.list()
 }

 const Mutation = {
    createStudent:(root,args,context,info) => {
        const id = db.students.create({collegeId:args.collegeId,
        firstName:args.firstName,
        lastName:args.lastName})
        return id
     },

     createCollege:(root, args, context, info) => {
        const id = db.colleges.create({collegeName:args.collegeName,
            location:args.location})
        return db.colleges.get(id)
     }
 }

 const Student = {
    college:(root) => {
        return db.colleges.get(root.collegeId)
    }
 }

 module.exports = {Query, Student, Mutation}
import CourseModel from "../../Models/CourseModel.js";

export default async function CreateCourseController(req, res) {

    const { name, workload } = req.body;

    const course = await CourseModel.create({
        name,
        workload
    });

    return res.status(201).json(course);

}
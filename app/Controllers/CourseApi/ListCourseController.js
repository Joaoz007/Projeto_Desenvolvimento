import CourseModel from "../../Models/CourseModel.js";

export default async function ListCourseController(req, res) {

    const courses = await CourseModel.findAll();

    return res.json(courses);

}
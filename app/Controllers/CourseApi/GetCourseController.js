import CourseModel from "../../Models/CourseModel.js";

export default async function GetCourseController(req, res) {

    const { id } = req.params;

    const course = await CourseModel.findByPk(id);

    if (!course) {
        return res.status(404).json({
            error: "Curso não encontrado"
        });
    }

    return res.json(course);

}
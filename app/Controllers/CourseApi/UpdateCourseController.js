import CourseModel from "../../Models/CourseModel.js";

export default async function UpdateCourseController(req, res) {

    const { id } = req.params;

    const { name, workload } = req.body;

    const course = await CourseModel.findByPk(id);

    if (!course) {
        return res.status(404).json({
            error: "Curso não encontrado"
        });
    }

    await course.update({
        name,
        workload
    });

    return res.json(course);

}
import CourseModel from "../../Models/CourseModel.js";

export default async function DeleteCourseController(req, res) {

    const { id } = req.params;

    const course = await CourseModel.findByPk(id);

    if (!course) {
        return res.status(404).json({
            error: "Curso não encontrado"
        });
    }

    await course.destroy();

    return res.json({
        message: "Curso removido com sucesso"
    });

}
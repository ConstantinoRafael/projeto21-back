import enrollmentsRepository from "../../repositories/enrollments-repository";

async function getEnrollments() {

    const enrollment = await enrollmentsRepository.findEnrollments();
    
    return enrollment;

}

async function createOrUpdateEnrollment() {

}

const enrollmentsService = {
    getEnrollments,
    createOrUpdateEnrollment
}

export default enrollmentsService;
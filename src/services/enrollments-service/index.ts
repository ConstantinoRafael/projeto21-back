import enrollmentsRepository from "../../repositories/enrollments-repository";

async function getEnrollmentByUserId(userId: number) {

    const enrollment = await enrollmentsRepository.findEnrollmenteByUserId(userId);
    
    return enrollment;

}

async function createOrUpdateEnrollment() {

}

const enrollmentsService = {
    getEnrollmentByUserId,
    createOrUpdateEnrollment
}

export default enrollmentsService;
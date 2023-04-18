import enrollmentsRepository from "../../repositories/enrollments-repository";

async function getEnrollments() {

    const enrollments = await enrollmentsRepository.findEnrollments();
    
    return enrollments;

}

async function getEnrollmentsByInst(inst: string) {
    const enrollments = await enrollmentsRepository.findEnrollmentsByInst(inst);

    return enrollments;
}

async function createOrUpdateEnrollment() {

}

const enrollmentsService = {
    getEnrollments,
    getEnrollmentsByInst,
    createOrUpdateEnrollment
}

export default enrollmentsService;
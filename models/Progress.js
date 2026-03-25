class Progress {
    constructor(studentId, courseId, progressPercentage) {
        this.studentId = studentId;
        this.courseId = courseId;
        this.progressPercentage = progressPercentage;
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }

    updateProgress(newPercentage) {
        this.progressPercentage = newPercentage;
        this.updatedAt = new Date().toISOString();
    }
}

module.exports = Progress;
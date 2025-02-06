abstract class Course {
    protected modules: Module[] = [];
    
    public get () {
        return this.modules;
    }

    constructor() {
        this.createCourse();
    }

    public abstract createCourse(): void;
}

class HLDCourse extends Course {
    public createCourse(): void {
        this.modules = [
            new DemoModule(),
            new SummaryModule()
        ];
    }
}

class LLDCourse extends Course {
    public createCourse(): void {
        this.modules = [
            new DemoModule(),
            new ExerciseModule(),
            new SummaryModule(),
        ];
    }
}
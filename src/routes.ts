import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService'

export function createCourse(req: Request, resp: Response){
    CreateCourseService.execute({
        educator: "Dom Pedro",
        name: "NodeJs", 
        duration: 10, 
    });

    CreateCourseService.execute({
        name: "NodeJs", 
        duration: 10, 
    });

    return resp.send();
} 
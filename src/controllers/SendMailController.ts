import { Request, Response } from "express"
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";


class SendMailController {

    async execute(request: Request, response: Response) {
        
        const{email, survey_id} =request.body;

        const usersRepository = getCustomRepository(UsersRepository);
        const surveysRepository = getCustomRepository(SurveysRepository);
        const surveyUsersRepository = getCustomRepository(SurveysUsersRepository);

        const userAlreadyExists = await usersRepository.findOne({email});

        if(!userAlreadyExists) {
            return response.status(400).json ({
                error: "User does not exist!"
            });
        }

        const surveyAlreadyExists = await surveysRepository.findOne({id: survey_id});

        if(!surveyAlreadyExists) {
            return response.status(400).json ({
                error: "Survey does not exist!"
            });
        }
// Salvar as informações na tabela surveyUser
//Enviar email para usuário



    }   
}

export { SendMailController }
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){
        return  
    }
    @Get(":id")
    getMessage(@Body() body:any){
        console.log(body);
    }
    @Post()
    createMessage(@Param() id:CreateMessageDto ){
        console.log("id:",id);
    }
    
}

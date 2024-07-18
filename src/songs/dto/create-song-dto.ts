import { IsString,IsNotEmpty, IsArray, IsDate, IsNumber, IsDateString, IsMilitaryTime } from 'class-validator';

export class  CreateSongDTO {
    @IsString()
    @IsNotEmpty()
    readonly title;
    
    @IsArray()
    @IsNotEmpty()
    @IsString({ each: true })
    readonly artists: string[];

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration;
}
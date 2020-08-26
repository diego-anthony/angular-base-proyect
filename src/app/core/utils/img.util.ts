import { AppPath } from '../configs/app-path.config';
export class ImgUtil{
    static getCarouselImage(imageName: string) {
        let pathImg = AppPath.CAROUSEL_IMG_PATH;
        if (imageName) {
          pathImg += imageName;
        } else {
          pathImg += "notengoimagen.jpeg"
        }
        return pathImg;
    }
}
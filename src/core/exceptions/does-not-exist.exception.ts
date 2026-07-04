import {NotFoundException} from "@nestjs/common";

export class DoesNotExistException extends NotFoundException {
    static ThrowIfNull(obj: any, message: string = "Does not exist") {
        if (obj === null || obj === undefined) {
            throw new DoesNotExistException(message);
        }
    }

    static ThrowIf(condition: boolean, message: string = "Does not exist") {
        if (condition) {
            throw new DoesNotExistException(message);
        }
    }

    static ThrowIfNot(condition: boolean, message: string = "Does not exist") {
        if (!condition) {
            throw new DoesNotExistException(message);
        }
    }

}
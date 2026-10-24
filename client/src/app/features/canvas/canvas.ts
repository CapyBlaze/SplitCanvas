import { Component, inject } from "@angular/core";
import { SocketService } from "../../core/socket.service";

@Component({
    selector: "app-canvas",
    templateUrl: "./canvas.html",
    styleUrl: "./canvas.css",
})
export class Canvas {
    protected readonly socket = inject(SocketService);
}

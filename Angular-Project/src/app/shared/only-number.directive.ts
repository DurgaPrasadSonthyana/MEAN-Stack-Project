import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[numbersOnly]'
})
export class OnlyNumberDirective {
  
  
  regexStr = /^[0-9]*$/;   /** regex type */

  constructor( private _el: ElementRef ) { }
  @HostListener ('keypress', ['$event'] )

  onKeyPress(event:any){
    console.log("tererterlkj",event)

    return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener ('paste', ['$event'] )
  blackPaste(event:ClipboardEvent){
    this.validateFields(event);
    }


validateFields(event:ClipboardEvent){
  console.log("input txgt",event.clipboardData)
event.preventDefault();
const pasteData = event.clipboardData?.getData('text/plain').replace(/[^0-9]/g,'');

console.log("input txgt--222",pasteData)

document.execCommand('insertHTML',false,pasteData)
}


}

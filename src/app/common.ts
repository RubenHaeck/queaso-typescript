import $ from 'jquery';

// export declare const Type: FunctionConstructor;
export interface Type<T> extends Function {
  new (...args:any[]): T
}

export function bootstrapApp<T>(type: Type<T>){
  const name = new type();
}

export function loopAndFillCombobox<T>(collection: T, select: JQuery): void {
  // $.each(collection, (i: number, item: T) => {
  //   let newOption: JQuery = $('<option />');
  //   newOption.val(i).text(item.toString());
  //   select.append(newOption);
  // });
}

export function downloadData(data: Object, fileName: string): void {
  const dataStream = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`;
  let downloadLink: HTMLAnchorElement =  document.createElement('a');
  downloadLink.setAttribute('href', dataStream);
  downloadLink.setAttribute('download', fileName);
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
}

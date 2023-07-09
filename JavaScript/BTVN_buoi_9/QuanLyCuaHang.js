const storage = {
    name: 'Fake Storage',
    address: 'HN',
    owner: 'Tuan Minh',
    items: [
        {id: 1, name: 'Table', category: 'Furniture', price: 20},
        {id: 2, name: 'Fan', category: 'Device', price: 110},
        {id: 3, name: 'Jean', category: 'Cloth', price: 2}
    ]
};


function outputItem(arr){
    console.log('ID: ' + arr.id + ' | Name: ' + arr.name + ' | Category: ' + arr.category + ' | Price: ' + arr.price);
}


function sortById(arr){
    for(let i=0; i<(arr.length-1); i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i].id > arr[j].id){
                let t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }
}


for(let i=0; i<10; i++){
    let action;
    do{
        action = Number(prompt('Nhập action: \n1.Sửa thông tin kho hàng \n2.Thêm mặt hàng \n3.Tìm kiếm mặt hàng \n4.Xoá mặt hàng'))
    }while(action<1 || action>4);

    switch(action){
        case 1:
            storage.name = prompt('Nhập lại tên cửa hàng: ');
            storage.address = prompt('Địa chỉ sau khi sửa: ');
            storage.owner = prompt('Người sở hữu sau khi sửa: ');
    
            console.log('Thông tin kho hàng sau khi cập nhật: ');
            console.log('Name: ', storage.name, ' | Address: ', storage.address, ' | Owner: ', storage.owner);
            break;
        
        case 2:
            let isExistId;
            let newId;
            do{
                isExistId = false;
                newId = Number(prompt('Nhập ID: '));
                for(let item of storage.items){
                    if(item.id === newId){
                        isExistId = true;
                        alert('Mã mặt hàng đã tồn tại!');
                        break;
                    }
                }
            }while(isExistId === true);
            let newName = prompt('Nhập tên mặt hàng: ');
            let newCategory = prompt('Nhập loại mặt hàng: ');
            let newPrice = Number(prompt('Nhập giá mặt hàng: '));
    
            storage.items.push({id: newId, name: newName, category: newCategory, price: newPrice});
            sortById(storage.items);
            console.log('Thông tin các mặt hàng đang có trong kho: ');
            for(let item of storage.items){
                outputItem(item);
            }
            break;
    
        case 3:
            let kw = prompt('Nhập từ khoá tìm kiếm: ');
            let isExistKeyword = false;
            console.log('Các mặt hàng có tên chứa từ khoá "' + kw + '" là: ');
            for(let item of storage.items){
                if(item.name.includes(kw)){
                    outputItem(item);
                    isExistKeyword = true;
                }
            }
            if(isExistKeyword == false){
                for(let item of storage.items){
                    outputItem(item);
                }
            }
            break;
        
        case 4:
            let deleteId = Number(prompt('Nhập mã mặt hàng cần xoá: '));
            let canDelete = false;
            for(let i=0; i<storage.items.length; i++){
                if(storage.items[i].id === deleteId){
                    storage.items.splice(i, 1);
                    canDelete = true;
                }
            }
            
            if(canDelete === true){
                console.log('Thông tin các mặt hàng trong kho sau khi xoá: ');
                for(let item of storage.items){
                    outputItem(item);
                }
            }else{
                alert('Không tìm thấy mã hàng cần xoá');
                break;
            }
            break;
    }
}



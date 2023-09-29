const initalState ={
    gioHang: []
};

export const giohangReducer =(state=initalState, action)=>{
    const {type, payload} =action;

    switch (type) {
        case "THEM_GIO_HANG":{
            let gioHang =[...state.gioHang];

            gioHang.push(
                {...payload, soLuong: 1}
            );

            if(gioHang)

            
            return {...state, gioHang};
        }
           
        default:
            return {...state}
    }
}
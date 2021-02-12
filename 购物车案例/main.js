const app = new Vue({
  el: '#app',
  data: {
    book:[
      {
        id:1,
        name:'python入门到精通',
        date:'2006-9',
        price:85,
        count:1
      },
      {
        id:2,
        name:'python入门到精通',
        date:'2006-9',
        price:60,
        count:1
      },
      {
        id:3,
        name:'python入门到精通',
        date:'2006-9',
        price:39,
        count:1
      },
        {
        id:4,
        name:'编程大全',
        date:'2006-9',
        price:35,
        count:1
      }
    ]
  },
  filters: {
    numberfixed(price) {
      return '￥' + price.toFixed(2)
    }
  },
    methods:{
      addclick(index){
        this.book[index].count++;

        },
    declick(index){
        this.book[index].count--;

        }
      },
    computed:{
      totalprice(){
        let totalprice=0
        for(let i=0;i<this.book.length;i++){
          totalprice=totalprice+this.book[i]
        }
        return totalprice
      }
    }

})

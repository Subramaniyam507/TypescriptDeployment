using {my.bookshop as b} from '../db/scehma';

service testService {
      
      entity Customers as projection on b.Customers;
      entity Orders as projection on b.Orders;
      function getOrders() returns Orders;


}

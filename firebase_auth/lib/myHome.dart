import 'package:flutter/material.dart';

class myHome extends StatefulWidget {
  final String email;
  final String password;
  final String name;
  final String phone;



  const myHome({Key? key, required this.email, required this.password,required this.name ,required this.phone}) : super(key: key);

  @override
  State<myHome> createState() => _myHomeState();
}
class _myHomeState extends State<myHome> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Email: ${widget.email}',
              style: TextStyle(fontSize: 18),
            ),
            SizedBox(height: 16),
            Text(
              'Password: ${widget.password}',
              style: TextStyle(fontSize: 18),
            ),
            SizedBox(height: 16),
            Text(
              'Password: ${widget.name}',
              style: TextStyle(fontSize: 18),
            ),
            SizedBox(height: 16),
            Text(
              'Password: ${widget.phone}',
              style: TextStyle(fontSize: 18),
            ),
          ],
        ),
      ),
    );
  }
}
